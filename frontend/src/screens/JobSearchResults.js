import React from 'react';

const JobSearchResults = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
        <ul>
          {results.map((job) => (
            <li key={job._id}>{job.jobTitle} - {job.location}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default JobSearchResults;
