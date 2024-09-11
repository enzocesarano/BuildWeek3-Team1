import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

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
            <Card.Text>{job.description}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default JobDetails;
