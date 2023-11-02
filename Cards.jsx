import PropTypes from 'prop-types';

export default function Cards(props) {

    return (
      <>
        <img src={props.img} alt="img" />
        <h1>{props.title}</h1>
        <h2>{props.review}</h2>
        <h3>{props.desc}</h3>
        <h3>{props.price}</h3>
      </>
    );
}
