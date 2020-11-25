import React from 'react';
import { shape } from 'prop-types';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';

import Thumbnail from 'components/Thumbnail';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

import { Main } from 'themes/styles';

const NotFound = ({ data }) => (
  <Layout
    cover={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}
  >
    <Seo title="404 Not Found" />
    <Main>
      <h1>404 Not Found</h1>
      <p>
        The page you requested cannot be found. The URL may be misspelled or the
        page you're looking for is no longer available.
      </p>
      <Link to="/">Back to home</Link>
    </Main>
  </Layout>
);

NotFound.propTypes = {
  data: shape({}).isRequired,
};

export default NotFound;

export const pageQuery = graphql`
  query {
    featuredImage: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "404.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
