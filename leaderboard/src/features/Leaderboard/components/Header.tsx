import Section from '@components/elements/Section';
import Paragraph from '@components/elements/Text/Paragraph';

const Header = () => {
  return (
    <Section className="bg-primary h-[250px] flex items-center justify-center text-white flex-col relative">
      <h1 className= "text-50 font-bold p-2 font-heading">
        Hello. 👋
      </h1>
      <Paragraph className="text-2xl">
          Welcome to Layer 5 leaderboard.
      </Paragraph>
      <Section className="absolute top-0 right-0 p-2">
      <a className="p-1 hover:bg-dark" href="https://discuss.layer5.io" target="_blank" rel="noreferrer">
          Discussion Forum
      </a>
      </Section>
    </Section>
  );
};

export default Header;
