function displayElements(isLoggedIn) {
    if (isLoggedIn) {
        jQuery("#profile").show();
        jQuery("#login").hide();
        jQuery(".mynav").show();
        jQuery("#fb-logout").show();
        jQuery("#posts").show();
    } else {
        jQuery("#profile").hide();
        jQuery("#login").show();
        jQuery(".mynav").hide();
        jQuery("#posts").hide();
        jQuery("#fb-logout").hide();
    }
}

function displayPosts(posts) {
    var postsHTML = "";

    for (var i=0; i < posts.length; i++) {

        if (posts[i].story) {
            var msg = posts[i].story;
        }

        if (posts[i].message) {
            var msg = posts[i].message;
        }

        postsHTML += `
          <div class="card">
            <div class="card-block">
              <p class="card-text">${msg}</p>
            </div>
          </div><br>`;
    }

    $("#posts").html(postsHTML);
}

function displayProfile(profile) {
   var user = {
       btn : {}
   };

    user.id = profile.id;
    user.url = "https://facebook.com/" + user.id;
    user.name = profile.name;
    user.email = profile.email;
    user.gender = profile.gender;
    user.image = profile.picture.data.url;
    user.birthday = profile.birthday;
    user.cover = profile.cover.source;
    user.currentSchool = profile.education[profile.education.length - 1].school.name;
    user.favoriteAthlete = profile.favorite_athletes[profile.favorite_athletes.length - 1].name;
    user.lastWork = profile.work[0].employer.name;
    user.location = profile.location.name;
    user.btn.class = "btn-primary";
    user.btn.text = "View your profile on Facebook";

    profil = `<img class="card-img-top" src="${user.cover}" alt="Card image cap">
                <div class="profile-picture-block">
                    <a class="profile-link" href="${user.url}" target="_blank">
                        <img class="profile-picture" src="${user.image}" alt="Card image cap">
                    </a>
                </div>
                <div class="card-block">
                    <h4 class="card-title">${user.name}</h4>
                    <ul class="profile-ul">
                        <li class="profile-il"><b>E-mail: </b> ${user.email}</li>
                        <li class="profile-il"><b>Gender: </b> ${user.gender}</li>
                        <li class="profile-il"><b>Birthday: </b> ${user.birthday}</li>
                        <li class="profile-il"><b>School: </b> ${user.currentSchool}</li>
                        <li class="profile-il"><b>Work: </b> ${user.lastWork}</li>
                        <li class="profile-il"><b>Location: </b> ${user.location}</li>
                        <li class="profile-il"><b>Favorite Athlete: </b> ${user.favoriteAthlete}</li>

                    </ul>
                    <a href="${user.url}" target="_blank" class="btn ${user.btn.class}">${user.btn.text}</a>
                </div>`;

    $("#profile").html(profil);
}
