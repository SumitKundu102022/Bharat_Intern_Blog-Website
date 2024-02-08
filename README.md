<h3> Bharat_Intern_Blog-Website </h3>
<p>Created a blog website for CURD operations of posts using Vite,HTML, CSS,javaScripts,tailwind CSS,MERN Stack,jwt auth and many more.</p>

# Blog Website README
<p>This is a blog website developed using Vite, HTML, CSS, JavaScript, Tailwind CSS, and the MERN (MongoDB, Express.js, React.js, Node.js) stack. It also utilizes JWT authentication for user login and registration along with CRUD (Create, Read, Update, Delete) operations for managing posts.</p>

<h2>Features</h2>
<ul>
<li>User authentication with JWT tokens</li>
<li>User registration and login functionality</li>
<li>User profile management</li>
<li>CRUD operations for blog posts (Create, Read, Update, Delete)</li>
<li>Responsive design using Tailwind CSS</li>
<li>Frontend developed with React.js</li>
<li>Backend developed with Node.js and Express.js</li>
<li>Database powered by MongoDB</li>
</ul>

<h2>Technologies Used</h2>
<ul>
<li>Vite: A fast frontend build tool that offers instant server start and rapid hot module replacement.</li>
<li>HTML: Markup language for creating website structure.</li>
<li>CSS: Styling language for designing website layout and appearance.</li>
<li>JavaScript: Programming language for implementing website interactivity.</li>
<li>Tailwind CSS: Utility-first CSS framework for quickly styling web applications.</li>
<li>MERN Stack:
      <ul type="circle">
         <li>MongoDB: NoSQL database for storing data.</li>
         <li>Express.js: Web application framework for Node.js, used for building server-side logic.</li>
         <li>React.js: JavaScript library for building user interfaces.</li>
         <li>Node.js: JavaScript runtime environment for executing server-side code.</li>
     </ul></li>
<li>JWT Authentication: JSON Web Tokens for user authentication and authorization.</li>
</ul>

<h2>Setup Instructions</h2>
<ol>
<li><p><strong>Clone the repository:</strong></p><pre><div class="dark bg-gray-950 rounded-md"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/SumitKundu102022/Bharat_Intern_Blog-Website.git
<span class="hljs-built_in">cd</span> Blog Web
</code></div></div></pre></li>
<li><p><strong>Install dependencies: check package.json file</strong></p><pre><div class="dark bg-gray-950 rounded-md"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><span class="hljs-comment"># Install frontend dependencies</span>
<span class="hljs-built_in">cd</span> frontend
npm install vite example1 example2 ...
<br>
<span class="hljs-comment"># Install backend dependencies</span>
<span class="hljs-built_in">cd</span> ../backend
npm install ejs nodemon example1 example2 ...
</code></div></div></pre></li>
<li><p><strong>Set up environment variables:</strong>
Create a <code>.env</code> file in the <code>backend</code> directory and add the following variables:</p><pre><div class="dark bg-gray-950 rounded-md"><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-plaintext">PORT=5000
MONG_URI=your_mongodb_connection_string
SECRET=your_jwt_secret
</code></div></div></pre></li>
<li><p><strong>Start the development server:</strong></p><pre><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><span class="hljs-comment"># Start frontend server</span>
<span class="hljs-built_in">cd</span> frontend
npm run dev
<br>
<span class="hljs-comment"># Start backend server</span>
<span class="hljs-built_in">cd</span> ../backend
nodemon index.js
</code></div></div></pre></li>
<li><p><strong>Access the website:</strong>
Open your browser and go to <code>http://localhost:5173/</code> to view the blog website.</p></li>
</ol>

<h2>Contributions</h2>
<p>Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a target="_new">LICENSE</a> file for details.</p>
