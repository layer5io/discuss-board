interface StatusStyleProps {
    [key: string]: string
}

interface BadgeProps {
    text: string;
    status: string
}

const statusStyles: StatusStyleProps = {
    success: 'bg-primary text-primary',
    default: 'bg-neutral text-neutral-copy-black',
    danger: 'bg-error text-error',
    info: 'bg-blue-400 text-blue-400',
    warn: 'bg-brown text-brown',
    unknown: 'bg-neutral-light-50 text-neutral-dark-50 italic',
};

const Badge: React.FC<BadgeProps> = ({ text, status }) => {
    const statusStyle = statusStyles[status] ?? statusStyles.unknown;
    return (
        <button
            className={`rounded-lg px-5 py-2 ${statusStyle} text-center bg-opacity-10`}
        >
            {text}
        </button>
    );
};

export default Badge
