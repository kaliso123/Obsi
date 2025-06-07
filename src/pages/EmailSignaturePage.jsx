import React from 'react';
import EmailSignatureGenerator from '../components/EmailSignature/EmailSignatureGenerator';
import SEO from '../components/UI/SEO';

const EmailSignaturePage = () => {
  return (
    <>
      <SEO 
        title="Email Signature Generator"
        description="Create professional email signatures for Obsidium team members with our easy-to-use generator tool."
      />
      <EmailSignatureGenerator />
    </>
  );
};

export default EmailSignaturePage;