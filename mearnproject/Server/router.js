const express = require('express');
const router = express.Router();
const db = require('./dbcon');
const { signupValidation, loginValidation } = require('./validation');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
router.post('/register', signupValidation, (req, res, next) => {
    // return res.status(201).send(req.body);
    db.query(
        `SELECT * FROM users WHERE LOWER(email) = LOWER(${db.escape(
            req.body.email
        )});`,
        (err, result) => {
            if (result.length) {
                return res.status(409).send({
                    msg: 'This user is already in use!'
                });
            } else {
                // username is available
                db.query(
                    `INSERT INTO users (name, email, password) VALUES ('${req.body.name}', ${db.escape(
                        req.body.email
                    )}, ${db.escape(req.body.password)})`,
                    (err, result) => {
                        if (err) {
                            throw err;
                            return res.status(400).send({
                                msg: err
                            });
                        }
                        return res.status(201).send({
                            msg: 'The user has been registerd with us!'
                        });
                    }
                );

            }
        }
    );
});
router.post('/register-vendor', signupValidation, (req, res, next) => {
    // return res.status(201).send(req.body);
    db.query(
        `SELECT * FROM users_vendor WHERE LOWER(email) = LOWER(${db.escape(
            req.body.email
        )});`,
        (err, result) => {
            if (result) {
                return res.status(409).send({
                    msg: 'This user is already in use!'
                });
            } else {
                // username is available
                db.query(
                    `INSERT INTO users_vendor (vname, vemail,vmob,vadd, vpass) VALUES ('${req.body.name}', ${db.escape(
                        req.body.email
                    )},'${req.body.vmob}','${req.body.vadd}', ${db.escape(req.body.password)})`,
                    (err, result) => {
                        if (err) {
                            throw err;
                            return res.status(400).send({
                                msg: err
                            });
                        }
                        return res.status(201).send({
                            msg: 'The Vendor has been registerd with us!'
                        });
                    }
                );

            }
        }
    );
});
router.post('/login', loginValidation, (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE email = ${db.escape(req.body.email)} and password = ${db.escape(req.body.password)};`,
        (err, result) => {
            // user does not exists
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err
                });
            }
            if (!result.length) {
                return res.status(401).send({
                    msg: 'Email or password is incorrect!'
                });
            }
            const token = jwt.sign({ id: result[0].id }, 'the-super-strong-secrect', { expiresIn: '1h' });
            // db.query(
            //     `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
            // );
            return res.status(200).send({
                msg: 'Logged in!',
                token,
                user: result[0]
            });
            
        }
    );
});

router.post('/login-vendor', loginValidation, (req, res, next) => {
    db.query(
        `SELECT * FROM users_vendor WHERE vemail = ${db.escape(req.body.email)} and vpass = ${db.escape(req.body.password)};`,
        (err, result) => {
            // user does not exists
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err
                });
            }
            if (!result.length) {
                return res.status(401).send({
                    msg: 'Email or password is incorrect!'
                });
            }
            const token = jwt.sign({ id: result[0].id }, 'the-super-strong-secrect', { expiresIn: '1h' });
            // db.query(
            //     `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
            // );
            return res.status(200).send({
                msg: 'Logged in!',
                token,
                user: result[0]
            });
            
        }
    );
});

router.get('/get-events', signupValidation, (req, res, next) => {
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    ) {
        return res.status(422).json({
            message: "Please provide the token",
        });
    }
    const theToken = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
    db.query('SELECT * FROM events where uid=?', decoded.id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Fetch Successfully.' });
    });
});
router.get('/vendor-get-events', signupValidation, (req, res, next) => {
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    ) {
        return res.status(422).json({
            message: "Please provide the token",
        });
    }
    const theToken = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
    db.query('SELECT * FROM events as e join users as u on e.uid = u.id where vid=?', decoded.id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Fetch Successfully.' });
    });
});
router.get('/vendor-all-events', signupValidation, (req, res, next) => {
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    ) {
        return res.status(422).json({
            message: "Please provide the token",
        });
    }
    // const theToken = req.headers.authorization.split(' ')[1];
    // const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
    db.query(`SELECT * FROM events as e join users as u on e.uid = u.id where vid=''`, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Fetch Successfully.' });
    });
});
router.post('/get-vendor-events', signupValidation, (req, res, next) => {
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    ) {
        return res.status(422).json({
            message: "Please provide the token",
        });
    }
    const theToken = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
    db.query('SELECT * FROM events where vid=?', decoded.id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Fetch Successfully.' });
    });
});

router.post('/add-event', (req, res, next) => {
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    ) {
        return res.status(422).json({
            message: "Please provide the token",
        });
    }
    const theToken = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
    db.query(`INSERT INTO events(ename,etype,price,description,visitors_cnt,eventaddress,uid,vid) values('${req.body.ename}','${req.body.etype}','${req.body.price}','${req.body.desc}','${req.body.cnt}','${req.body.add}','${decoded.id}','')`, (err, result) => {
        if (err) {
            // throw err;
            return res.status(400).send({
                msg: err
            });
        }
        return res.status(201).send({
            msg: 'Event registered'
        });
    });

})
router.get('/get-vendors', (req, res, next) => {
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    ) {
        return res.status(422).json({
            message: "Please provide the token",
        });
    }

    db.query('SELECT * FROM users_vendor ', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Fetch Successfully.' });
    });
})
router.post('/accept-event', (req, res, next) => {
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer') ||
        !req.headers.authorization.split(' ')[1]
    ) {
        return res.status(422).json({
            message: "Please provide the token",
        });
    }
    const theToken = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(theToken, 'the-super-strong-secrect');
    db.query(`UPDATE  events SET vid='${decoded.id}' where id = ${req.body.id}`, (err, result) => {
        if (err) {
            // throw err;
            return res.status(400).send({
                msg: err
            });
        }
        return res.status(201).send({
            msg: 'Event accepted'
        });
    });

})
module.exports = router;