
async function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: `User_${id}`
      });
    }, 1000); 
  });
}

async function run_4() {
  const user = await fetchUser(1);
  console.log(user); 
}

run_4();
