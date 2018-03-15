<h1 align="center"> Hashify Password</h1>

<h2>Introduction</h2>
<p style="text-indent: 10%">It is recommended to use different passwords for different accounts. However it is difficult to remember complex password for each website.</p>
<p style="text-indent: 10%">This is a chrome extension which generates a hash from your common password and a random/chosen 4 digit number (salt). The generated hash can be used as password for different websites. It is recommended to be keep different salt for different sites (You only need to memorize 4 or less digit number).</p>
<h2>How it solves the problem?</h2>
<p style="text-indent: 10%">To crack the password an attacker needs to know 4 things.<br>

1.  Common Password
2.  Salt
3.  Hashing algorithm
4.  Salting Method

Let's say the common password is attacked using dictionary attacks and tries to find salt with brute-force. Each dictionary password will be checked against 9000 salts.
Which will make it difficult to crack. Apart from this he will have to know the salting method. Identifying the hashing algorithm is simple though.
As the salting and hashing is done on server, attacker has to get access to the server to know the hashing algorithm. He can also use the extension to get hash value, so he doesn't need to know the hashing algorithm and salting method, but this is infeasible as he has to send requests on server which will slow down the checking process. Also as an advanced security feature, multiple requests from same IP can be blocked on server.
</p>
<h2>How to use it?</h2>
<p style="text-indent: 10%">Download the code and store it in a folder.<br>

1. Visit chrome://extensions (via omnibox or menu -> More Tools -> Extensions).
2. Enable Developer mode by ticking the checkbox in the upper-right corner.
3. Click on the "Load unpacked extension..." button.
4. Select the folder containing the code.

The extension will be added to you chrome browser. Click on extension.<br>
You will have two input one for you common password and one for salt.<br>
You can choose salt randomly by clicking "Get a Random Salt!"<br>
Finally click on "Get Hash!" and profit!
</p>