import React, { useEffect, useState } from 'react';
import ollama from 'ollama';

const prompt = "Symptoms: Fever, nausea Remarks: History of heart disease, sedentary lifestyle";

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    maxWidth: '800px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#555',
    marginTop: '10px',
    marginBottom: '5px',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
};

function UserReport() {
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const generateResponse = async () => {
      try {
        console.log("Generating response...");

        const response = await ollama.generate({
          model: "mistral",
          prompt: prompt,
          system: "You are an assistant to a doctor. They are going to provide you with the symptoms of the patient as well as remarks about their condition/history (possibly none). Your task is to provide the doctor with a Diagnosis and a brief about it as well as a treatment plan that should contain physical lifestyle changes and necessary medication. You would also be given some patient data in standard units and you have to find anomalies in them if any. Give your output under the headings of Diagnosis, Anomalies, and Treatment. Add headings and subheadings if necessary. Elaborate only on the disease/treatment if some data is missing/not in the correct format ignore it, do not mention it at all. Work with what you are given. You can only suggest tests that the patient might take if necessary."
        });

        console.log("Response received:", response);

        if (response && response.response) {
          const formattedOutput = formatOutput(response.response);
          setOutput(formattedOutput);
        } else {
          throw new Error("Expected 'response' field not found in the response object.");
        }
      } catch (error) {
        console.error("Error during ollama.generate:", error);
        setError(error);
      }
    };

    generateResponse();
  }, []);

  const formatOutput = (text) => {

    return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
    .replace(/\n/g, '<br />'); 
  };

  return (
    <div style={styles.container}>
      {error ? (
        <p style={styles.error}>Error generating response: {error.message}</p>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: output || "Report Loading...(takes a couple of minutes)" }} />
      )}
    </div>
  );
}

export default UserReport;
