import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getTweetDetail } from '../petitions/serviceAdverts.js';
import { relogin } from '../petitions/service'

import Page from '../common/Page.js';
import AdvertDetail from '../common/detailAdverts.js';
import DeleteAdverts from '../common/deleteAdverts.js';
const IdAdverts = props => {
  const [adverts, setAdverts] = useState(null);
  const { advertsId } = useParams();
  const navigate = useNavigate();
  const unmounteRef = useRef(false);
  const id = {id:advertsId}

  
  useEffect(() => {
    relogin()
    getTweetDetail(advertsId)
      .then(adverts => {
        setAdverts(adverts);
      })
      .catch(error=>{

        if (error.status === 404) {
          navigate('404');
        }

        if (error.message==='Unauthorized') {
          navigate("/login")
        }
      })
      
  }, [advertsId, navigate]);

  useEffect(() => {
    return () => {
      unmounteRef.current = true;
    };
  }, []);

  return (
    <Page title="Adverts detail" {...props}>
      <AdvertDetail {...adverts}/>
      <DeleteAdverts {...id}></DeleteAdverts>
    </Page>
  );
};

export default IdAdverts;
