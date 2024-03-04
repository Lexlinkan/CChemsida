export const body = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minHeight: "100vh",
};

export const text = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const textTitle = {
  fontSize: 45,
  fontFamily: "dosis, sans-serif", // Updated to Dosis font
  color: "#999a9a",
  margin: 15,
  letterSpacing: 1.5,
};

export const textSubtitle = {
  fontSize: 45,
  fontFamily: "dosis, sans-serif", // Updated to Dosis font
  color: "#999a9a",
  margin: 15,
  letterSpacing: 1.5,
  marginBottom: 50,
};

export const logo = {
  width: 154,
  height: 181,
  marginTop: 25,
  margin: 40,
};

export const nav = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColoe: "lightgreen",
  alignItems: "center",
  flexDirection: "row",
  padding: 20,
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  fontSize: 20,
  fontWeight: 500,
  width: "78%",
  textDecoration: "none",
};

export const navItem = {
  transition: "transform 0.2s ease-in-out",
  cursor: "default",
  textDecoration: "none",
};

export const businessImg = {
  position: "relative",
  display: "flex",
};

export const overLayF = {
  position: "absolute",
  bottom: 0,
  left: 0,
  marginLeft: -1,
  marginBottom: 40,
};

export const cardContainer = {
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  padding: 20,
  paddintBottom: 0,
  width: "75%",
};

export const card = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  width: 350,
};

export const cardTitle = {
  fontSize: 25,
  fontFamily: "dosis, sans-serif",
  color: "#002554",
  margin: 15,
};

export const cardSubtitle = {
  fontSize: 15,
  fontFamily: "Merriweather, serif",
  color: "#999a9a",
  margin: 15,
  letterSpacing: 2,
};

export const imageContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "row",
  width: "75%",
  marginBottom: 70,
};

export const buttonStyle = {
  position: "absolute",
  top: 5,
  left: 5,
  padding: "4px 8px",
  background: "rgba(0, 37, 84, 0.7)",
  color: "#fff",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
  fontFamily: "dosis, sans-serif",
  transition: "background-color 0.3s ease",
};

export const linkStyle = {
  textDecoration: "none",
  color: "#002554",
  fontSize: 20,
  fontWeight: 500,
  fontFamily: "dosis, sans-serif",
};

// Add media queries for iPads and iPhones
export const mediaQueries = {
  "@media (max-width: 1024px)": {
    container: {
      flexDirection: "column",
      alignItems: "center",
    },
    cardContainer: {
      flexDirection: "column",
    },
    card: {
      width: "100%",
      maxWidth: "none",
    },
    imageContainer: {
      flexDirection: "column",
    },
  },
  "@media (max-width: 768px)": {
    container: {
      padding: 10,
    },
    cardContainer: {
      padding: 10,
      flexDirection: "column",
    },
    cardTitle: {
      fontSize: 20,
    },
    cardSubtitle: {
      fontSize: 12,
    },
    imageContainer: {
      marginBottom: 30,
    },
  },
};
