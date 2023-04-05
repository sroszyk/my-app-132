function RoundsList({ rounds }) {
    const roundsListItems = rounds.map((round, idx) => {
        return (
            <li key={idx}>{round.seconds}: {round.deciSeconds}</li>
        );
    })

    return (
        <ol>
            {roundsListItems}
        </ol>
    );
}

export default RoundsList;