import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        console.log(`Fetching job details for ID: ${id}`);
        const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs/${id}`);
        if (response.ok) {
          const { data } = await response.json();
          const jobData = data.find((job) => job._id === id); // Trova il lavoro specifico nell'array
          console.log("Job data:", jobData);
          setJob(jobData);
        } else {
          alert("Errore nel recupero dei dettagli del lavoro");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobDetails();
  }, [id]);

  return (
    <>
      <h1 className="text-center mb-4"> Qui troverete tutta la descrizione compelta del lavoro</h1>
      <Container>
        {job ? (
          <Card>
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Text>
                <strong>Company:</strong> {job.company_name}
                <br />
                <strong>Category:</strong> {job.category}
                <br />
                <strong>Job Type:</strong> {job.job_type}
                <br />
                <strong>Publication Date:</strong> {new Date(job.publication_date).toLocaleDateString()}
                <br />
                <strong>Location:</strong> {job.candidate_required_location}
                <br />
                <strong>Salary:</strong> {job.salary || "Not specified"}
                <br />
                <strong>Description:</strong> <span dangerouslySetInnerHTML={{ __html: job.description }} />
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Container>
    </>
  );
};

export default JobDetails;
