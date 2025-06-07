import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Copy, Eye, FileText } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import EmailSignature from './EmailSignature';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';
import Button from '../UI/Button';

const EmailSignatureGenerator = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    title: 'Marketing Manager',
    email: 'john.doe@obsidium.dev',
    phone1: '(+383) 45 354 743',
    phone2: '(+383) 45 439 223',
    website: 'www.obsidium.dev',
    linkedinUrl: 'https://linkedin.com/in/johndoe',
    twitterUrl: 'https://twitter.com/johndoe'
  });

  const [showPreview, setShowPreview] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const signatureRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const downloadSignature = async () => {
    if (signatureRef.current) {
      setIsGenerating(true);
      try {
        const canvas = await html2canvas(signatureRef.current, {
          backgroundColor: null,
          scale: 2,
          useCORS: true,
          allowTaint: true,
          foreignObjectRendering: true,
          logging: false
        });
        
        const link = document.createElement('a');
        link.download = `${formData.name.replace(/\s+/g, '_')}_signature.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (error) {
        console.error('Error generating PNG signature:', error);
        alert('Error generating PNG. Please try again.');
      } finally {
        setIsGenerating(false);
      }
    }
  };

  const downloadPDF = async () => {
    if (signatureRef.current) {
      setIsGenerating(true);
      try {
        const canvas = await html2canvas(signatureRef.current, {
          backgroundColor: null,
          scale: 2,
          useCORS: true,
          allowTaint: true,
          foreignObjectRendering: true,
          logging: false
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4'
        });
        
        const imgWidth = 200;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        pdf.save(`${formData.name.replace(/\s+/g, '_')}_signature.pdf`);
      } catch (error) {
        console.error('Error generating PDF signature:', error);
        alert('Error generating PDF. Please try again.');
      } finally {
        setIsGenerating(false);
      }
    }
  };

  const copySignatureHTML = () => {
    const htmlContent = generateGmailCompatibleHTML();
    navigator.clipboard.writeText(htmlContent).then(() => {
      alert('Gmail-compatible HTML signature copied to clipboard!');
    });
  };

  const generateGmailCompatibleHTML = () => {
    return `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; background: linear-gradient(to right, #111827, #0c4a6e, #111827); border-radius: 8px; max-width: 600px; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
  <tr>
    <td style="padding: 24px;">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="vertical-align: top; padding-right: 24px;">
            <table cellpadding="0" cellspacing="0" border="0" style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 12px; border: 1px solid rgba(12, 166, 235, 0.3);">
              <tr>
                <td>
                  <img src="https://obsidium.dev/logo.png" alt="Obsidium Logo" style="width: 48px; height: 56px; display: block;" />
                </td>
              </tr>
            </table>
          </td>
          <td style="width: 1px; background: linear-gradient(to bottom, transparent, #0ca6eb, transparent); padding: 0 12px;">
            &nbsp;
          </td>
          <td style="vertical-align: top;">
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-bottom: 12px;">
                  <div style="font-size: 20px; font-weight: bold; color: white; margin: 0 0 4px 0;">${formData.name}</div>
                  <div style="color: #7cd1fd; font-weight: 500; margin: 0 0 4px 0;">${formData.title}</div>
                  <div style="margin-top: 4px;">
                    <span style="color: #36bff9; font-weight: 600; font-size: 18px;">Obsidium</span>
                    <span style="color: #0ca6eb; margin-left: 8px; font-size: 14px;">• Web Development</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 8px;">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="vertical-align: top; padding-right: 12px; color: #36bff9;">✉</td>
                      <td><a href="mailto:${formData.email}" style="color: white; text-decoration: none; font-size: 14px;">${formData.email}</a></td>
                    </tr>
                    <tr>
                      <td style="vertical-align: top; padding-right: 12px; color: #36bff9; padding-top: 4px;">📞</td>
                      <td style="padding-top: 4px;">
                        <div><a href="tel:${formData.phone1.replace(/\s/g, '')}" style="color: white; text-decoration: none; font-size: 14px; display: block;">${formData.phone1}</a></div>
                        <div><a href="tel:${formData.phone2.replace(/\s/g, '')}" style="color: white; text-decoration: none; font-size: 14px; display: block;">${formData.phone2}</a></div>
                      </td>
                    </tr>
                    <tr>
                      <td style="vertical-align: top; padding-right: 12px; color: #36bff9; padding-top: 4px;">🌐</td>
                      <td style="padding-top: 4px;"><a href="https://${formData.website}" style="color: white; text-decoration: none; font-size: 14px;">${formData.website}</a></td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding-top: 8px;">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="padding-right: 12px;">
                        <a href="${formData.linkedinUrl}" style="background: rgba(12, 166, 235, 0.2); padding: 8px; border-radius: 50%; text-decoration: none; display: inline-block;">
                          <span style="color: #7cd1fd; font-size: 12px; font-weight: bold;">in</span>
                        </a>
                      </td>
                      <td>
                        <a href="${formData.twitterUrl}" style="background: rgba(12, 166, 235, 0.2); padding: 8px; border-radius: 50%; text-decoration: none; display: inline-block;">
                          <span style="color: #7cd1fd; font-size: 12px; font-weight: bold;">tw</span>
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td style="width: 4px; background: linear-gradient(to bottom, #0ca6eb, #0284c7, #0ca6eb); border-radius: 2px; padding-left: 12px;">
            &nbsp;
          </td>
        </tr>
      </table>
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 16px;">
        <tr>
          <td style="height: 1px; background: linear-gradient(to right, transparent, #0ca6eb, transparent);">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section background="light">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <SectionTitle
          title="Email Signature Generator"
          subtitle="Create a professional email signature for Obsidium team members"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div variants={fadeIn} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Customize Your Signature
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-obsidium-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-obsidium-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-obsidium-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number 1
                </label>
                <input
                  type="tel"
                  name="phone1"
                  value={formData.phone1}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-obsidium-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number 2
                </label>
                <input
                  type="tel"
                  name="phone2"
                  value={formData.phone2}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-obsidium-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-obsidium-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Twitter URL
                </label>
                <input
                  type="url"
                  name="twitterUrl"
                  value={formData.twitterUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-obsidium-500"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button
                onClick={downloadSignature}
                variant="primary"
                icon={<Download size={18} />}
                className="bg-obsidium-500 hover:bg-obsidium-600"
                disabled={isGenerating}
              >
                {isGenerating ? 'Generating...' : 'Download PNG'}
              </Button>
              <Button
                onClick={downloadPDF}
                variant="secondary"
                icon={<FileText size={18} />}
                disabled={isGenerating}
              >
                {isGenerating ? 'Generating...' : 'Download PDF'}
              </Button>
              <Button
                onClick={copySignatureHTML}
                variant="outline"
                icon={<Copy size={18} />}
              >
                Copy HTML
              </Button>
            </div>
          </motion.div>

          {/* Preview Section */}
          <motion.div variants={fadeIn} className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Live Preview
              </h3>
              <Button
                onClick={() => setShowPreview(!showPreview)}
                variant="ghost"
                icon={<Eye size={18} />}
              >
                {showPreview ? 'Hide' : 'Show'} Preview
              </Button>
            </div>

            {showPreview && (
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <div ref={signatureRef}>
                  <EmailSignature {...formData} />
                </div>
              </div>
            )}

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                How to Use in Gmail
              </h4>
              <ol className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="bg-obsidium-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">1</span>
                  Fill in your personal information in the form
                </li>
                <li className="flex items-start">
                  <span className="bg-obsidium-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">2</span>
                  Click "Copy HTML" to get Gmail-compatible code
                </li>
                <li className="flex items-start">
                  <span className="bg-obsidium-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">3</span>
                  Go to Gmail Settings → General → Signature
                </li>
                <li className="flex items-start">
                  <span className="bg-obsidium-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">4</span>
                  Paste the HTML code in the signature editor
                </li>
                <li className="flex items-start">
                  <span className="bg-obsidium-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">5</span>
                  Save changes and test with a new email
                </li>
              </ol>
              
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  <strong>Note:</strong> The HTML version is optimized for Gmail and other email clients. 
                  PNG and PDF versions are great for other applications or printing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default EmailSignatureGenerator;