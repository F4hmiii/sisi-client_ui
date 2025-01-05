const Card = (props) => {
    const { title, titleCard, children, variant = "", desc } = props;
    
    return (
        <>
            {title && (
                <div className="text-lg text-gray-600 mb-2">{title}</div>
            )}
            
            <div className={`flex-1 bg-white rounded-lg px-6 py-5 shadow-xl ${variant}`}>
                {titleCard && (
                    <div className="text-lg text-gray-02 mb-2">{titleCard}</div>
                )}
                
                {desc ? (
                    <div className="divide-y divide-gray-200">
                        {desc}
                    </div>
                ) : (
                    children
                )}
            </div>
        </>
    );
};

export default Card;