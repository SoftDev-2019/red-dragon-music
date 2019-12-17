import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import IntrumentCollectionPage from './instruments.component';
import Spinner from '../spinner/spinner.component';

const GET_INSTRUMENTS = gql`
    {
        Instruments {
            id
            name
            type
            price
            condition
            imageUrl
            model
        }
    }
  `

  const IntrumentCollectionPageContainer = () => (
      <Query query={GET_INSTRUMENTS}>
          {
              ({ loading, error, data }) => {
                  if (loading) return <Spinner />;
                  return <IntrumentCollectionPage instruments={data.Instruments} />;
              }
          }
      </Query>
  )

  export default IntrumentCollectionPageContainer;