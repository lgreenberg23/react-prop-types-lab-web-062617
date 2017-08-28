// Code Product Component Here

import React from 'react'
import PropTypes from 'prop-types'
import { createPropType } from 'react-custom-proptypes';

class Product extends React.Component{
	render(){
		return(
			<div className="product">
				<ul>
					<li>{this.props.name} </li>
					<li>{this.props.producer} </li>
					<li>{this.props.hasWatermark} </li>
					<li>{this.props.color} </li>
					<li>{this.props.weight} </li>
				</ul>
			</div>
			)
	}
}

Product.defaultProps ={
	hasWatermark: false
}

const weightRange = createPropType(
	prop =>
		Number.isInteger(prop) && 
		prop <= 300  && prop >= 80,
		'Must be within range of 80 - 300'
)

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: weightRange.isRequired

}

// *  `weight`: a number — required, ranges between 80 and 300



export default Product
