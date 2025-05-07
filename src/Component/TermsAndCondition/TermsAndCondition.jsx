import React from 'react';
import useTitle from '../Title/useTitle';

const TermsAndCondition = () => {
    useTitle("Terms&Conditions")
  return (
    <div className="bg-transparent text-gray-200 min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8 text-center text-red-500">
          Terms and Conditions
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-300">
            Welcome to our movie website. By accessing or using our site, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. User Responsibilities</h2>
          <p className="text-gray-300">
            You agree to use this site only for lawful purposes. You must not use the site to distribute harmful or offensive content, or to harm the website, its users, or third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Content Usage</h2>
          <p className="text-gray-300">
            All content on this site (images, text, videos) is protected by copyright laws and may not be reused without permission. You may watch or read content for personal use only.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Account Termination</h2>
          <p className="text-gray-300">
            We reserve the right to suspend or terminate your access at any time without notice if you violate these terms or engage in unlawful behavior.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Disclaimer</h2>
          <p className="text-gray-300">
            We do not guarantee the accuracy or availability of content. Use the site at your own risk. We are not liable for any damages arising from your use of the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Changes to Terms</h2>
          <p className="text-gray-300">
            We may update these terms at any time. Changes will be posted on this page. It is your responsibility to review the terms periodically.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about these Terms and Conditions, please contact us at <a href="https://subscription-box-1eb8d.web.app/" target='_blank' className="text-red-500 underline">https://subscription-box-1eb8d.web.app/</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndCondition;
