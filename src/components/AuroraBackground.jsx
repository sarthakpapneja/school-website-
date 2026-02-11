const AuroraBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-midnight">
            <div className="absolute inset-0 aurora-premium" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
        </div>
    );
};

export default AuroraBackground;
