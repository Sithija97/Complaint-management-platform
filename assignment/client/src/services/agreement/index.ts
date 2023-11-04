import axios from "axios";
import { AgreementInputs } from "../../models";

const BASE_URL = "/api/agreement";

const confirmAgreement = async (payload: AgreementInputs) => {
  const response = await axios.post(
    `${BASE_URL}/agreement-confirmation`,
    payload
  );
  return response;
};

const agreementService = { confirmAgreement };

export default agreementService;
