import MailchimpSubscribe from 'react-mailchimp-subscribe';
import TwitterLogo from '../assets/twitter.svg';
import GumroadLogo from '../assets/gumroad.svg';

const mailchimpUrl = 'https://fanfarade.us7.list-manage.com/subscribe/post?u=ae769fb063d386c828b792859&amp;id=caa4485192';

const Index = (): JSX.Element => (
  <>
    <a href="/" className="absolute top-4 lg:top-8 left-4 lg:left-8 text-2xl font-black group">
      <span className="transition-all ease-in-out duration-150 inline-block transform scale-100 rotate-0 group-hover:scale-150 group-hover:rotate-90">🎉</span>
      {' '}
      Fanfarade
    </a>
    <div className="max-w-3xl mx-auto p-4 pt-8">
      <div className="lg:flex space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="lg:flex-3">
          <h1 className="text-6xl mb-6">
            Data for creators to&nbsp;
            <span className="lg:inline-block text-yellow-600">focus your time</span>
            &nbsp;+&nbsp;
            <span className="lg:inline-block text-yellow-500">get more sales</span>
            .
          </h1>
          <p className="text-xl mb-6">
            Fanfarade identifies patterns between content and sales, so you know&nbsp;<span className="font-medium">what works for your audience</span>
            &nbsp;and what&nbsp;
            <span className="font-medium">makes you more money</span>
            .
          </p>
          <p className="font-bold text-lg mb-4 leading-snug">Get notified when it&apos;s ready:</p>
          <div className="text-lg mailchimp-form">
            <MailchimpSubscribe url={mailchimpUrl} />
          </div>
        </div>
        <div className="lg:flex-1 lg:pt-8">
          <p className="font-bold text-lg mb-4 text-gray-400 leading-snug">Planned integrations:</p>
          <ul className="lg:flex items-center">
            <li className="flex-1"><GumroadLogo /></li>
            <li className="flex-1 w-20"><TwitterLogo /></li>
          </ul>
        </div>
      </div>
    </div>
  </>
);

export default Index;
