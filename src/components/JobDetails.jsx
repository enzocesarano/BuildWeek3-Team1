import { useParams } from "react-router-dom";
import { Card, Container, Row, Col, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { FaStar, FaPencilAlt, FaPlus } from "react-icons/fa";
import { BsListUl } from "react-icons/bs";
import { useSelector } from "react-redux";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const myProfile = useSelector((state) => state.myProfile);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        console.log(`Fetching job details for ID: ${id}`);
        const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs/${id}`);
        if (response.ok) {
          const { data } = await response.json();
          const jobData = data.find((job) => job._id === id);
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
    <Container>
      <Row>
        <Col xs={12} md={3} lg={3}>
          {myProfile && myProfile.image && (
            <Card className="bg-light mb-3">
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src="https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq"
                  className="mb-5"
                />
                <div className="position-absolute top-0 end-0 me-4 mt-4 pointer fs-4"></div>
                <div className="w-100 position-absolute bottom-0 px-4 d-flex justify-content-between align-items-end">
                  <div className="rounded-circle border border-3 border-light sizeImg overflow-hidden search-job-img">
                    <img src={myProfile.image} alt="" className=" w-100" />
                  </div>
                  <div className="pointer"></div>
                </div>
              </div>
              <Card.Body className="px-4 py-3">
                <div className="d-flex align-items-end mb-2">
                  <Card.Title className="fs-4 mb-0">
                    {myProfile.name} {myProfile.surname}
                  </Card.Title>
                </div>
                <Card.Text className="mb-2 text-secondary-emphasis reduced-font">{myProfile.title}</Card.Text>
                <Card.Text className="text-secondary reduced-font">
                  {myProfile.area} • <br />
                  <a href="#" className="text-dark reduced-font-link">
                    <FaStar className="icon icon-blue" /> Prova 1 mese di Premium per 0 EUR
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
          <Card className="mb-3 ">
            <Card.Body className="mx-2 my-1 ">
              <div className="d-flex align-items-center ">
                <BsListUl className="icon-style me-2" />
                <Card.Text className="text fw-bold my-2 pointer">Preferenze</Card.Text>
              </div>
              <div className="d-flex align-items-center bi bi-bookmark-fill icon-style mt-3  ">
                <Card.Text className="text fw-bold ms-2 pointer ">Le mie offerte di lavoro</Card.Text>
              </div>
            </Card.Body>
          </Card>
          <button className="btnJob p-4 border border-primary text-primary fw-bold w-100">
            <FaPencilAlt className="me-2" />
            Pubblica offerta gratuita
          </button>
        </Col>
        <Col xs={12} md={6} lg={6}>
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
        </Col>
        <Col xs={12} md={3} lg={3}>
          <ul className="list-unstyled d-flex flex-wrap horizontal-list mx-4 my-2 align-items-center">
            <li className="mb-2  ">
              <a
                href="https://about.linkedin.com/it-it"
                target="_blank"
                className="text-secondary footer-link text-decoration-none  horizontal-list "
              >
                Informazioni
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://it.linkedin.com/accessibility?"
                target="_blank"
                className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
              >
                Accessibilità
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.linkedin.com/help/linkedin?trk=footer_d_flagship3_job_home&lipi=urn%3Ali%3Apage%3Ad_flagship3_job_home%3BiD0s3ALZTAStDxD03w08Wg%3D%3D"
                target="_blank"
                className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
              >
                Centro assistenza
              </a>
            </li>
            <li className="mb-2">
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
                  id="dropdown-basic"
                >
                  Privacy e condizioni
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#" className="horizontal-list">
                    Informativa sulla privacy
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="horizontal-list">
                    Contratto di licenza
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="horizontal-list">
                    Termini e condizioni delle pagine
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="horizontal-list">
                    Informativa sui cookie
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="horizontal-list">
                    Informativa sul copyright
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="mb-2">
              <a
                href="https://www.linkedin.com/help/linkedin/answer/a1342443/?lang=it&lipi=urn%3Ali%3Apage%3Ad_flagship3_job_home%3BiD0s3ALZTAStDxD03w08Wg%3D%3D"
                target="_blank"
                className=" text-secondary footer-link text-decoration-none p-0 horizontal-list"
              >
                Opzioni per gli annunci pubblicitari
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart"
                target="_blank"
                className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
              >
                Pubblicità
              </a>
            </li>
            <li className="mb-2">
              <Dropdown className="small-dropdown">
                <Dropdown.Toggle
                  variant="link"
                  className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
                  id="dropdown-basic"
                >
                  Privacy e condizioni
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#" className="horizontal-list">
                    <p className="fs-6 fw-bold custom-hover">Impara con LinkedIn</p>
                    <p className="text-secondary custom-hover small-text">Assumi su LinkedIn</p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="horizontal-list">
                    <p className="fs-6 fw-bold custom-hover">Admin Center</p>
                    <p className="text-secondary custom-hover small-text">
                      Gestisci i dettagli di fatturazione e account
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="horizontal-list">
                    <p className="custom-hover small-text">
                      <strong className="textPlus">Crea una pagina aziendale</strong>
                      <FaPlus className="icon ms-2 iconPlus mb-2  " />
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="mb-2">
              <a href="#" className="text-secondary footer-link text-decoration-none p-0 horizontal-list">
                Scarica l’app LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="text-secondary footer-link text-decoration-none p-0 horizontal-list"
                onClick={() => console.log("Show footer")}
              >
                Altro
              </a>
            </li>
            <li className="d-flex align-items-center">
              <img
                src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/46/2022/08/Linkedin-Logo-e1660320077673.png"
                alt="LinkedIn Logo"
                className="logo-img me-2"
              />
              <p className="mb-0">LinkedIn Corporation © 2024</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetails;
