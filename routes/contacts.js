const express = require('express');
const router = express.Router()

// @route     GET api/contacts
// @desc      Get all user contacts
// @access    private
router.get('/', (req,res) => {
    res.send('Get all Contacts')
});

// @route     POST api/contacts
// @desc      Add new contacts
// @access    private
router.post('/', (req,res) => {
    res.send('Add  Contacts')
});

// @route     PUT api/contacts/:id
// @desc      update contacts
// @access    private
router.put('/:id', (req,res) => {
    res.send('update Contacts')
});

// @route     DEL api/contacts/:id
// @desc      DELETE contacts
// @access    private
router.delete('/:id', (req,res) => {
    res.send('delete Contacts')
});

module.exports = router;