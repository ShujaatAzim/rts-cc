const Suitcase = props => {
  return (
    <div>
      <h3>Suitcase</h3>
      <ul>
      {props.suitcase.map((item, i) => {
        return (
          <div key={i}>
            <li>{item.name}</li>
            <button onClick={() => props.handleSuitcase(item)}>-</button>
          </div>
        )
      })}
      </ul>
    </div>
  );
}

export default Suitcase;