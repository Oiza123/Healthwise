import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                About Us
              </h6>
              <p>
                Health-Wise offers the best working environment, merging tech
                and medicine and bringing them right to your comfort zone.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Services</h6>
              <p className="text-reset">Booking Appointment</p>
              <p className="text-reset">Retrieving Information </p>
              <p className="text-reset">Medical Assistance</p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/add" className="text-reset">
                  Booking
                </a>
              </p>
              <p>
                <a href="Info" className="text-reset">
                  Info
                </a>
              </p>
              <p>
                <a href="/Help" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-3" />
                Jos, Nigeria.
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                +234 1122 334 455
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Healthwise
        <br />
        Designed by Joy Onimisi
      </div>
    </MDBFooter>
  );
}

export default Footer;
