export default function (server) {
  const projectX = server.create('project', { name: 'Project X' });
  const newEarth = server.create('project', { name: 'New Earth 2050' });
  const manhattan = server.create('project', { name: 'Manhattan' });

  server.create('project', { name: 'Top Secret' });

  server.create('client', {
    firstName: 'Adam',
    lastName: 'Phorester',
    primaryProjectId: projectX.id,
    email: 'adam@phorest.com',
    age: 30,
    vip: true,
  });

  server.create('client', {
    firstName: 'Lindsay',
    lastName: 'Walton',
    primaryProjectId: newEarth.id,
    age: 25,
  });

  server.create('client', {
    firstName: 'Courtney',
    lastName: 'Henry',
    primaryProjectId: newEarth.id,
    age: 25,
  });

  server.create('client', {
    firstName: 'Courtney',
    lastName: 'Henry',
    primaryProjectId: newEarth.id,
  });

  server.create('client', {
    firstName: 'Whitney',
    lastName: 'Francis',
    primaryProjectId: manhattan.id,
    email: 'whitney@phorest.com',
  });

  server.create('client', {
    firstName: 'Leonard',
    lastName: 'Krasner',
    primaryProjectId: manhattan.id,
    email: 'leonard@phorest.com',
    age: 65,
  });
}
