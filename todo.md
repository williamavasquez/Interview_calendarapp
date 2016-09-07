users:        sports:           user_sports:

id | name     id | name         id_user | id_sport | pref
---+--------  ---+------------  --------+----------+------
 1 | Peter     1 | Tennis             1 |        1 |    0
 2 | Alice     2 | Football           1 |        2 |    1
 3 | Bob       3 | Basketball         2 |        3 |    0
                                      3 |        1 |    2
                                      3 |        3 |    1
                                      3 |        2 |    0



SELECT u.userId,
     u.email,
     Group_concat(workouts.workoutId order by workoutId) myworkouts
FROM users u
     LEFT JOIN workouts work
             ON u.email = work.id_user
GROUP BY u.userId,
        u.fullname;

        users:        sports:           user_sports:

        id | name     id | name         id_user | id_sport | pref
        ---+--------  ---+------------  --------+----------+------
         1 | Peter     1 | Tennis             1 |        1 |    0
         2 | Alice     2 | Football           1 |        2 |    1
         3 | Bob       3 | Basketball         2 |        3 |    0
                                              3 |        1 |    2
                                              3 |        3 |    1
                                              3 |        2 |    0



        SELECT u.userId,
             u.email,
             Group_concat(work.workoutname order by workoutname) myworkouts
        FROM users u
             LEFT JOIN workouts work
                     ON u.email = work.email
        GROUP BY u.userId,
                u.fullname;


                var queryString = "select * from users "
                queryString += "left join orders on orders.user_id = users.id "
                queryString += "where users.id = " + req.params.id;
                console.log(queryString)
                connection.query(queryString, function(err, userAndShops) {
                    if (err) throw err;

                    //uncomment this to see what the data gets returned like
                    //res.send(userAndCats)
                    res.render('users/show', {userAndShops: userAndShops})

                });

                var email = req.session.user_email;

                var queryString = SELECT u.userId,
                     u.email,
                     Group_concat(work.workoutname order by workoutname) myworkouts
                FROM users u
                     LEFT JOIN workouts work
                             ON u.email = work.email
                GROUP BY u.userId,
                        u.fullname;

                console.log(queryString)
                connection.query(queryString, function(err, userAndShops) {
                    if (err) throw err;

                    //uncomment this to see what the data gets returned like
                    //res.send(userAndCats)
                    res.render('users/show', {userAndShops: userAndShops})

                });
