function SearchBar(props) {
  return (
    <input
      placeholder={props.placeholder || 'Search'}
      value={props.value}
      onChange={function(e) { props.onChange(e.target.value); }}
    />
  );
}


export default SearchBar;
