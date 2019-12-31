import React from 'react'
// import {
//   Row, Col, Button,
//   Card,CardImg, CardBody,
//   CardText, CardTitle
// } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import {
  Row, Button,
  Card,CardImg, CardBody,
  CardText, CardTitle
} from 'reactstrap'
import ArticleDetails from './ArticleDetails'

const ArticleItem = ({ article , deleteAtricle}) => {

  const {title, author, image, _id}  = article
    return (
      <Row className='text-center '>
        <Card style={{width: '17em', marginBottom:'2em'}}>
          <CardImg  src={image} alt=' ' />
          <CardBody>
            <CardTitle>
              {title}
            </CardTitle>
               <p>By</p>
            <CardText>
              {author}
            </CardText>
            <Link to={{
              pathname: `/articlelist/${_id}`,
              state:{ articlelist: _id}
            }} >
              <Button variant='primary'>
                Read More
              </Button>
            </Link>
            <button onClick={deleteAtricle}>Delete</button>
          </CardBody>
        </Card>
       
      </Row>
      );
}

export default ArticleItem;