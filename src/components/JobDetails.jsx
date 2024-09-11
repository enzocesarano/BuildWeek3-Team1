import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs/${id}`);
        if (response.ok) {
          const data = await response.json();
          setJob(data);
        } else {
          alert("Error fetching job details");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobDetails();
  }, [id]);

  return (
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
              <strong>Description:</strong> <div dangerouslySetInnerHTML={{ __html: job.description }} />
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default JobDetails;
