function StoperValue({ stoper }) {
    return (
        <strong>{stoper.seconds} : {stoper.deciSeconds}</strong>
    );
}
    
export default StoperValue;