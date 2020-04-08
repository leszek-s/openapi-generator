(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(1),o=a(9),r=(a(0),a(302)),l={id:"installation",title:"CLI Installation"},i={id:"installation",title:"CLI Installation",description:"There are a number of ways to use OpenAPI Generator. This page documents how to install the CLI artifact.",source:"@site/../docs/installation.md",permalink:"/docs/installation",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/installation.md",lastUpdatedBy:"William Cheng",lastUpdatedAt:1585489458,sidebar:"docs",next:{title:"Plugins",permalink:"/docs/plugins"}},p=[{value:"NPM",id:"npm",children:[]},{value:"Homebrew",id:"homebrew",children:[]},{value:"Docker",id:"docker",children:[]},{value:"JAR",id:"jar",children:[]},{value:"Bash Launcher Script",id:"bash-launcher-script",children:[]}],c={rightToc:p};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There are a number of ways to use OpenAPI Generator. This page documents how to install the CLI artifact.\nInstalling OpenAPI Generator's CLI tool allows users to generate all available generators from the command line."),Object(r.b)("p",null,"Some of the following are cross-platform options and some are not, these are called out where possible."),Object(r.b)("h2",{id:"npm"},"NPM"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Platform(s)"),": Linux, macOS, Windows")),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openapitools/openapi-generator-cli"}),"NPM package wrapper")," is cross-platform wrapper around the .jar artifact. It works by providing a CLI wrapper atop the JAR's command line options. This gives a simple interface layer which normalizes usage of the command line across operating systems, removing some differences in how options or switches are passed to the tool (depending on OS).\n",Object(r.b)("strong",{parentName:"p"},"Install")," the latest version of the tool globally, exposing the CLI on the command line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @openapitools/openapi-generator-cli -g\n")),Object(r.b)("p",null,"To install a specific version of the tool, pass the version during installation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @openapitools/openapi-generator-cli@cli-4.3.0 -g\n")),Object(r.b)("p",null,"To install the tool as a dev dependency in your current project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @openapitools/openapi-generator-cli -D\n")),Object(r.b)("p",null,"Then, ",Object(r.b)("strong",{parentName:"p"},"generate")," a ruby client from a valid ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml"}),"petstore.yaml")," doc:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx openapi-generator generate -i petstore.yaml -g ruby -o /tmp/test/\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"npx")," will execute a globally available ",Object(r.b)("inlineCode",{parentName:"p"},"openapi-generator"),", and if not found it will fall back to project-local commands. The result is that the above command will work regardless of which installation method you've chosen.")),Object(r.b)("h2",{id:"homebrew"},"Homebrew"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Platform(s)"),": macOS")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Install")," via ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"homebrew"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew install openapi-generator\n")),Object(r.b)("p",null,"Then, ",Object(r.b)("strong",{parentName:"p"},"generate")," a ruby client from a valid ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml"}),"petstore.yaml")," doc:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"openapi-generator generate -i petstore.yaml -g ruby -o /tmp/test/\n")),Object(r.b)("h2",{id:"docker"},"Docker"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Platform(s)"),": Linux, macOS, Windows")),Object(r.b)("p",null,"The OpenAPI Generator Docker image acts as a standalone executable. It can be used as an alternative to installing via homebrew, or for developers who are unable to install Java or upgrade the installed version."),Object(r.b)("p",null,"To generate code from a valid ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/2_0/petstore.yaml"}),"petstore.yaml")," doc with this image, you'll need to mount a local location as a volume.\nYou'll then need to output the generated code to this mapped volume. Everything else works the same as if you ran the command on your host machine."),Object(r.b)("p",null,"Here's an example generating a Go client:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run --rm \\\n  -v ${PWD}:/local openapitools/openapi-generator-cli generate \\\n  -i /local/petstore.yaml \\\n  -g go \\\n  -o /local/out/go\n")),Object(r.b)("h2",{id:"jar"},"JAR"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Platform(s)"),": Linux, macOS, Windows")),Object(r.b)("p",null,"If you're looking for the latest stable version, you can grab it directly from Maven.org (Java 8 runtime at a minimum):"),Object(r.b)("p",null,"JAR location: ",Object(r.b)("inlineCode",{parentName:"p"},"https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/4.3.0/openapi-generator-cli-4.3.0.jar")),Object(r.b)("p",null,"For ",Object(r.b)("strong",{parentName:"p"},"Mac/Linux")," users:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/4.3.0/openapi-generator-cli-4.3.0.jar -O openapi-generator-cli.jar\n")),Object(r.b)("p",null,"For ",Object(r.b)("strong",{parentName:"p"},"Windows")," users, you will need to install ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://gnuwin32.sourceforge.net/packages/wget.htm"}),"wget")," or you can use Invoke-WebRequest in PowerShell (3.0+), e.g."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-powershell"}),"Invoke-WebRequest -OutFile openapi-generator-cli.jar https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/4.3.0/openapi-generator-cli-4.3.0.jar\n")),Object(r.b)("p",null,"After downloading the JAR, run ",Object(r.b)("inlineCode",{parentName:"p"},"java -jar openapi-generator-cli.jar help")," to show the usage."),Object(r.b)("p",null,"For Mac users, please make sure Java 8 is installed (Tips: run ",Object(r.b)("inlineCode",{parentName:"p"},"java -version")," to check the version), and export ",Object(r.b)("inlineCode",{parentName:"p"},"JAVA_HOME")," in order to use the supported Java version:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"export JAVA_HOME=`/usr/libexec/java_home -v 1.8`\nexport PATH=${JAVA_HOME}/bin:$PATH\n")),Object(r.b)("h2",{id:"bash-launcher-script"},"Bash Launcher Script"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Platform(s)"),": Linux, macOS, Windows (variable)")),Object(r.b)("p",null,"One downside to manual JAR downloads is that you don't keep up-to-date with the latest released version. We have a Bash launcher script at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/bin/utils/openapi-generator-cli.sh"}),"bin/utils/openapi-generator.cli.sh")," which solves this problem."),Object(r.b)("p",null,"To install the launcher script, copy the contents of the script to a location on your path and make the script executable."),Object(r.b)("p",null,"An example of setting this up (NOTE: Always evaluate scripts curled from external systems before executing them)."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p ~/bin/openapitools\ncurl https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/bin/utils/openapi-generator-cli.sh > ~/bin/openapitools/openapi-generator-cli\nchmod u+x ~/bin/openapitools/openapi-generator-cli\nexport PATH=$PATH:~/bin/openapitools/\n")),Object(r.b)("p",null,"Now, ",Object(r.b)("inlineCode",{parentName:"p"},"openapi-generator-cli"),' is "installed". On invocation, it will query the GitHub repository for the most recently released version. If this matches the last downloaded jar,\nit will execute as normal. If a newer version is found, the script will download the latest release and execute it.'),Object(r.b)("p",null,"If you need to invoke an older version of the generator, you can define the variable ",Object(r.b)("inlineCode",{parentName:"p"},"OPENAPI_GENERATOR_VERSION")," either ad hoc or globally. You can export this variable if you'd like to persist a specific release version."),Object(r.b)("p",null,"Examples:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'# Execute latest released openapi-generator-cli\nopenapi-generator-cli version\n\n# Execute version 3.1.0 for the current invocation, regardless of the latest released version\nOPENAPI_GENERATOR_VERSION=3.1.0 openapi-generator-cli version\n\n# Execute version 3.1.0-SNAPSHOT for the current invocation\nOPENAPI_GENERATOR_VERSION=3.1.0-SNAPSHOT openapi-generator-cli version\n\n# Execute version 3.0.2 for every invocation in the current shell session\nexport OPENAPI_GENERATOR_VERSION=3.0.2\nopenapi-generator-cli version # is 3.0.2\nopenapi-generator-cli version # is also 3.0.2\n\n# To "install" a specific version, set the variable in .bashrc/.bash_profile\necho "export OPENAPI_GENERATOR_VERSION=3.0.2" >> ~/.bashrc\nsource ~/.bashrc\nopenapi-generator-cli version # is always 3.0.2, unless any of the above overrides are done ad hoc\n')))}s.isMDXComponent=!0},302:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},b=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,h=b["".concat(l,".").concat(m)]||b[m]||u[m]||r;return a?o.a.createElement(h,i({ref:t},c,{components:a})):o.a.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);