
async function fetchUser2(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User_${id}`
      });
    }, 1000); 
  });
}

async function fetchUsers(ids: number[]): Promise<{ id: number; name: string }[]> {
  const userPromises = ids.map((id) => fetchUser2(id)); 
  const users = await Promise.all(userPromises);       
  return users;
}

async function run_5() {
  const users = await fetchUsers([1, 2, 3]);
  console.log(users);
 }

run_5();
