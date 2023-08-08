import Section from '@components/elements/Section';
import Paragraph from '@components/elements/Text/Paragraph';

const Header = () => {
  return (
    <Section className="bg-primary h-[250px] flex items-center justify-center text-white flex-col relative">
      <Section className="absolute  top-0 left-0 p-2">
        <a href="https://discuss.layer5.io" target="_blank" rel="noreferrer">
          Discussion Forum
        </a>
      </Section>
      <Paragraph className="text-4xl font-bold">
        Hello 👋, Welcome to Layer 5 leaderboard
      </Paragraph>
      <Paragraph className="my-4">
        {'Welcome to the service mesh community’s discussion forum.'}
      </Paragraph>
    </Section>
  );
};

export default Header;
