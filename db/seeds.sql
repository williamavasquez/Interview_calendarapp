INSERT INTO users (name, email, username, password, role) VALUES ('Jeffrey Yourman', 'jeffreyyourman@gmail.com', 'password', 'admin');

INSERT INTO exercises (name) VALUES ('Flat Bench Press');

INSERT INTO sets (reps, weight, difficulty, bodytarget, equipment, goalreps, goalweight) VALUES (8, 135, 'medium', 'chest', 'flat bench barbell', 10, 145);

INSERT INTO test (userId, fullname, email, username, password, workoutId, workoutname, bodytarget) VALUES (1,'Jeffrey Yourman', 'jeffreyyourman@gmail.com', 'jyourman', 'password', 1,'shoulder dayyyy', 'shoulders');



INSERT INTO test (userId, fullname, email, username, password, workoutId, workoutname, bodytarget) VALUES (1,'Jeffrey Yourman', 'jeffreyyourman@gmail.com', 'jyourman', 'password',2,'leg dayyyy', 'leg');
