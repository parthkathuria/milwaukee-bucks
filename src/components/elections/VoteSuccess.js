import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function VoteSuccess({ election }) {
  let url = "/";

  return (
      <div>
          <h1 className="mt-3 mb-3">Thank you for voting!</h1>
          <LinkContainer to={url}>
          <Button variant="success" size="sm">
            Back to homepage
          </Button>
        </LinkContainer>

      </div>
  );
}

export default VoteSuccess;