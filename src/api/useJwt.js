// ========================== Web service Instance uses for API ========================== //

/**
 *  JWT Service Import
 */ 
import JwtService from './jwtService';

// ** Export Service as useJwt
export default function WebService(jwtOverrideConfig) {
  const jwt = new JwtService(jwtOverrideConfig);
  return jwt;
}
