import request from 'superagent'

// To get around cors for now
const localhost = 'http://localhost:5000' 

export async function getMembers () {
  try {
    const result = await request.get(localhost + '/api/v1/players/players');
      const members = result.body;
      return members;
  }
  catch (err) {
    throw Error('Cannot get members!');
  }
}

export async function addMember (member) {
  try {
    const result = await request.post(localhost + '/api/v1/players/player/add')
      .send(member);
    return result.body;
  }
  catch (err) {
    throw Error('Cannot add a member!');
  }
}

export async function updateMember (member) {
  const{id} = member
  try {
    const result = await request.put(localhost + `/api/v1/players/player/${id}/edit`)
      .send(member);
    return result.body;
  }
  catch (err) {
    throw Error('Cannot update member!');
  }
}

export async function getMemberData(id) {
  try {
    const result = await request.get(localhost + `/api/v1/players/players/player/${id}`)
      .send(id);
    return JSON.parse(result.text);
  }
  catch (err) {
    throw Error('Cannot get member data');
  }
}
