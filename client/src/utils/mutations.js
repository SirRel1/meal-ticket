import { gql } from '@apollo/client';

export const CREATE_Rest = gql`
	mutation SaveRest($resid: String!, $imageurl: String, $name: String) {
		saveRest(resid: $resid, imageurl: $imageurl, name: $name) {
			_id
			resid
			imageurl
		}
	}
`;

export const REMOVE_FAV = gql`
	mutation Mutation($did: String!) {
		removeRest(did: $did) {
			_id
			resid
			imageurl
			name
		}
	}
`;

export const CREATE_VOTE = gql`
	mutation createVote($_id: String!, $techNum: Int!) {
		createVote(_id: $_id, techNum: $techNum) {
			_id
			tech1
			tech2
			tech1_votes
			tech2_votes
		}
	}
`;

export const createUser = gql`
	mutation addUser(
		$firstname: String!
		$lastname: String!
		$email: String!
		$password: String!
	) {
		addUser(
			firstname: $firstname
			lastname: $lastname
			email: $email
			password: $password
		) {
			token
			user {
				_id
				firstname
				lastname
				email
			}
		}
	}
`;

export const loginUser = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
        firstname
        lastname
        email
			}
		}
	}
`;


