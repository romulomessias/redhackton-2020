export const sendFeedback = async (payload) => {
  return fetch("http://ec2-18-234-191-73.compute-1.amazonaws.com/feedback", {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }
  ).then((res) => res.json());
};