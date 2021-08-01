const Closet = props => {

  return (
    <div>
      <h3>Closet</h3>
      <ul>
      {props.closet.map((item, i) => {
        return (
          <div key={i}>
            <li>{item.name}</li>
            <button onClick={() => props.handleCloset(item)}>+</button>
          </div>
        )
      })}
      </ul>
    </div>
  );
}

export default Closet;