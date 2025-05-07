import React from 'react';
import useTitle from '../Title/useTitle';

const PrivacyPolicy = () => {
  useTitle("Privacy Policy");
  return (
    <div className="bg-transparent text-gray-200 min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8 text-center text-red-500">
          Privacy Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-300">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <p className="text-gray-300">
            We may collect information such as your name, email address, and browsing activity when you interact with our site. This may be done through forms, cookies, or third-party analytics tools.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
          <p className="text-gray-300">
            We use the information we collect to improve user experience, send updates (if subscribed), analyze site usage, and ensure security. We do not sell or share your personal data with third parties without your consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Cookies</h2>
          <p className="text-gray-300">
            Our site uses cookies to remember user preferences and analyze site traffic. You can choose to disable cookies through your browser settings, but it may affect functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
          <p className="text-gray-300">
            We implement appropriate measures to protect your data. However, no method of transmission over the internet is 100% secure. Use our site at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
          <p className="text-gray-300">
            You have the right to access, correct, or delete your personal information. Contact us to make such requests.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Third-Party Links</h2>
          <p className="text-gray-300">
            Our website may contain links to third-party sites. We are not responsible for their content or privacy practices. Please review their policies separately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p className="text-gray-300">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about this Privacy Policy, please contact us at <a href="https://subscription-box-1eb8d.web.app/" target='_blank' className="text-red-500 underline">https://subscription-box-1eb8d.web.app/</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
