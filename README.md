# Simple Ram-based Realtime Access Database

    - Stored as JSON, is actively cached regularly based on the "importance" weights of certain keys.
    - Only read during full restarts
    - THIS IS NOT INTENDED FOR LARGE PROJECTS! 
        - This is just something I tossed together to have a convenient type checked DB thing for NodeJS projects.