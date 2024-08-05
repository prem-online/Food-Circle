// URLS
export const BASE_URL = 'http://localhost:3000/';
export const REFRESH_TOKEN_URL = `${BASE_URL}/api/v1/logins/refresh`

// HELPERS
export const MAX_RESULTS = 10;
export const COLORS = {
  PRIMARY: '#3498db',
  SECONDARY: '#2ecc71',
  BLACK: '#121212',
};

// MESSAGES
export const MODULE_SUCCESSFULL_CREATED = 'created successfully.';
export const LOGGED_IN_SUCCESSFULLY = 'Logged in successfully.';

export const BUTTONS = {
  PRIMARY: {
    fontWeight: "bold", 
    margin: 0,
    fontSize: "1.25rem",
    letterSpacing: 1,
    fontFamily: "sans-serif roboto",
    lineHeight: 1.6,
    textTransform: "capitalize",
    marginBottom: 2,
    color: COLORS.BLACK,
  },
  SECONDARY: {
    color: COLORS.WHITE,
    backgroundColor: COLORS.SECONDARY,
  },
}