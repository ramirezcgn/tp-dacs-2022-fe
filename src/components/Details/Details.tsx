import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPackage } from 'actions';

const mapDispatchToProps = (dispatch: Function) => ({
  attemptGetPackage: async (id, setErrors: Function) => {
    try {
      return await dispatch(getPackage(id));
    } catch (error: any) {
      setErrors(error?.response?.data);
      return [];
    }
  },
});

const DetailPackage = ({ attemptGetPackage }) => {
  console.log(attemptGetPackage);
  const [package, setPacakge] = useState([]);

  useEffect(() => {
    (async () => {
      const p = await attemptGetPackage((error) => {
        console.log(error);
      });
      setPacakge(p);
    })();
  }, [setPacakge, attemptGetPackage]);

  return (
    <div>
      <h1>{package}</h1>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(DetailPackage);
