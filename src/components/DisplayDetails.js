const DisplayDetails = ({ data }) => {
  if (!data) {
    return <h2>No data found! Submit the form first.</h2>;
  }

  return (
    <div className="details-container">
      <h2>User Details</h2>
      <div className="details-card">
        <p><strong>First Name:</strong> {data.firstName}</p>
        <p><strong>Last Name:</strong> {data.lastName}</p>
        <p><strong>User Name:</strong> {data.userName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.countryCode} {data.phoneNumber}</p>
        <p><strong>Country:</strong> {data.country}</p>
        <p><strong>City:</strong> {data.city}</p>
        <p><strong>PAN:</strong> {data.pan}</p>
        <p><strong>Aadhaar:</strong> {data.adhar}</p>
      </div>
    </div>
  );
};

export default DisplayDetails;

