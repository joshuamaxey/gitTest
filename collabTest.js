// Collaboration in GitHub.


// 1. Create a FORK of the repository that you want to work in.
// 2. Then CLONE that fork
        //! git clone <forked repo location>

// 3. Now lets set your remote to the main repo that you created a fork from.
        //! git remote add upstream <main repo-location>

// 4. Now you can update your fork with all of the changes made in th emain repo. Navigate to the main branch of your repo before you do this.
        //! git checkout main
        //! git fetch upstream
        //! git rebase upstream/main
