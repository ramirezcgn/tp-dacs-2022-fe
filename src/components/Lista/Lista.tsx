import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ItemPackage from '../Package/Package';
import styles from './lista.module.css';
import { getPackages } from 'actions';

const mapDispatchToProps = (dispatch: Function) => ({
  attemptGetPackages: async (setErrors: Function) => {
    try {
      return await dispatch(getPackages());
    } catch (error: any) {
      setErrors(error?.response?.data);
      return [];
    }
  },
});

const ListPackages = ({ attemptGetPackages }) => {
  const [packages, setPacakges] = useState([]);

  useEffect(() => {
    (async () => {
      const packages = await attemptGetPackages((data) => {
        console.log(data);
      });
      setPacakges(packages);
    })();
  }, [setPacakges]);

  return (
    <div>
      <ul className={styles.lista}>
        {packages.map((paquete) => (
          // eslint-disable-next-line react/jsx-key
          <ItemPackage paq={paquete} />
        ))}
      </ul>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(ListPackages);
